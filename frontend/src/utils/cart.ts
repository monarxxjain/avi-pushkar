import { CartItem } from "@/types/cart";
import { Product } from "@/types/products";

const CART_KEY = "cart_items";

// Get cart from localStorage
export const getCart = (): CartItem[] => {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(CART_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

// Save cart to localStorage
export const saveCart = (cart: CartItem[]) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

// Add/update item in cart
export const addToCart = (product: Product, quantity: number = 1) => {
  const cart = getCart();
  const index = cart.findIndex((item) => item.product._id === product._id);

  if (index > -1) {
    // Update quantity
    cart[index].quantity += quantity;
  } else {
    // Add new product
    cart.push({ product, quantity });
  }

  saveCart(cart);
};

export const updateCartQuantity = (productId: string, newQuantity: number) => {

    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    const cart = getCart();
    const updatedCart = cart.map((item) =>
      item.product._id === productId
        ? { ...item, quantity: Math.max(0, newQuantity) } // prevent negative
        : item
    );
    saveCart(updatedCart);
};

// Remove item from cart
export const removeFromCart = (productId: string) => {
  const cart = getCart().filter((item) => item.product._id !== productId);
  saveCart(cart);
};


export const generateInstagramCartMessage = (): string => {
  const cart = getCart();

  if (cart.length === 0) {
    return "🛒 Your cart is empty!";
  }

  const lines: string[] = [];
  
  lines.push("Hello Avi! 👋");
  lines.push("🛍️ *Order Summary*");
  lines.push("-----------------------");

  cart.forEach((item, index) => {
    lines.push(
      `${index + 1}. ${item.product.name} — ₹${item.product.price ?? 0} × ${item.quantity} = ₹${(item.product.price ?? 0) * item.quantity}`
    );
  });

  const total = cart.reduce(
    (sum, item) => sum + (item.product.price ?? 0) * item.quantity,
    0
  );

  lines.push("-----------------------");
  lines.push(`🧾 *Total:* ₹${total}`);
  lines.push("");
  lines.push("📩 Please confirm my order 🙌");

  return lines.join("\n");
};