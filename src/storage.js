import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveCarrito = async (cart) => {
  try {
    await AsyncStorage.setItem('cart', JSON.stringify(cart));
  } catch (error) {
    console.error("Error al guardar el carrito en AsyncStorage:", error);
  }
};

export const getCarrito = async () => {
  try {
    const cart = await AsyncStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  } catch (error) {
    console.error("Error al obtener el carrito de AsyncStorage:", error);
    return [];
  }
};