/* ==================================================================
  CẢNH BÁO BẢO MẬT NGHIÊM TRỌNG (NHƯ BẠN ĐÃ BIẾT)
  
  KHÔNG BAO GIỜ deploy (tải lên) file này lên web khi
  OPENROUTER_API_KEY đang chứa key thật.
  
  CHỈ SỬ DỤNG ĐỂ CHẠY TRÊN MÁY CÁ NHÂN (LOCALHOST).
  ==================================================================
*/

// (MỚI) Dán API Key của OpenRouter của bạn vào đây
const OPENROUTER_API_KEY = "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"; 
        
// (MỚI - Tùy chọn) Điền URL trang của bạn (nếu deploy) hoặc localhost
// OpenRouter dùng thông tin này để xếp hạng (không bắt buộc)
const YOUR_SITE_URL = "http://localhost"; // (Ví dụ: http://localhost:5500)
const YOUR_SITE_NAME = "Chill Website";

// --- Cấu hình Firebase (Giữ nguyên) ---
const firebaseConfig = {
  apiKey: "AIzaSyDZvhZ9wQoT_Mbh4qt8d4EweEI9SZJ_Jcs",
  authDomain: "chillweb-fscproject.firebaseapp.com",
  projectId: "chillweb-fscproject",
  storageBucket: "chillweb-fscproject.firebasestorage.app",
  messagingSenderId: "105811818691",
  appId: "1:105811818691:web:16bb8aacee57e4b7e48a76"
};

// --- API Key của ImgBB (Giữ nguyên) ---
const IMGBB_API_KEY = "bc38f5cce33c55364b687358b9ef7a34";