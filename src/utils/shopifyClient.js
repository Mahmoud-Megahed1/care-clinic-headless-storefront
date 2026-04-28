import Client from 'shopify-buy';

// Initialize the Shopify Buy client
// Currently using placeholders. 
// When Dr. Nada provides the Shopify Store URL and Storefront Access Token, we will update these.
const client = Client.buildClient({
  domain: 'YOUR_SHOPIFY_STORE_DOMAIN', // e.g. dna-plus-care.myshopify.com
  storefrontAccessToken: 'YOUR_STOREFRONT_ACCESS_TOKEN'
});

/**
 * Fetch a specific product by its handle
 * @param {string} handle - The product handle (e.g. 'silky-serum')
 */
export const fetchProductByHandle = async (handle) => {
  try {
    const product = await client.product.fetchByHandle(handle);
    return product;
  } catch (error) {
    console.error(`Error fetching product ${handle}:`, error);
    return null;
  }
};

/**
 * Fetch all products in the store
 */
export const fetchAllProducts = async () => {
  try {
    const products = await client.product.fetchAll();
    return products;
  } catch (error) {
    console.error('Error fetching all products:', error);
    return [];
  }
};

/**
 * Create a checkout and generate a checkout URL
 * @param {Array} lineItems - Array of items to add { variantId, quantity }
 * @returns {string} checkoutUrl - The URL to redirect the user to complete payment
 */
export const createCheckout = async (lineItems) => {
  try {
    // 1. Create an empty checkout
    const checkout = await client.checkout.create();
    
    // 2. Add items to the checkout
    const checkoutWithItems = await client.checkout.addLineItems(checkout.id, lineItems);
    
    // 3. Return the webUrl which handles the actual payment securely on Shopify's end
    return checkoutWithItems.webUrl;
  } catch (error) {
    console.error('Error creating checkout:', error);
    return null;
  }
};

export default client;
