import { QueryClient } from '@tanstack/react-query'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Tắt retry mặc định để tự xử lý trong interceptor
      retry: false,
      // Tùy chỉnh thời gian cache nếu cần
      gcTime: 1000 * 60 * 5 // 5 phút
    }
  }
})
export default queryClient
