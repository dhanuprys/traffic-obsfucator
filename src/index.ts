/**
 * Strategy
 * 
 * Strategy adalah bentuk logika yang akan digunakan untuk meng-enskripsi dan
 * deskripsi sebuah data
 */
// Plain: Data mentah yang dapat dibaca dengan mudah
export { default as Plain } from './strategy/Plain';
// Base64: Data JSON yang dideserialisasi menjadi base64
export { default as Base64 } from './strategy/Base64';
// Passwordable: Menggunakan library simple-encryptor untuk mendeskripsi data
export { default as Passwordable } from './strategy/Passwordable';

// Utils
export { default as Obsfucator } from './obsfucator';
export { default as Middleware } from './middleware';
export { default as Request } from './request';