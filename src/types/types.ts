export interface UserType {
  id: number
  username: string
  email: string 
  role: string
}

export interface MovieType {
  movie_id: number
  title: string
  genre: string
  duration: number
  rating: string
  release_date: string
  description: string
  thumbnails: string
}

export interface ShowtimeType {
  showtime_id: number
  movie_id: number
  hall_id: number
  show_date: string
  show_time: string
  price: number
}

export interface ReservationType {
  reservation_id: number
  user_id: number
  seat_id: number
  reservation_date: string
  status: string
  updated_at: string
}

export interface HallType {
  hall_id: number
  name: string
  total_rows: number
  seats_per_row: number
}

export interface SeatType {
  seat_id: number
  showtime_id: number
  seat_number: number
  row_number: number
  status: string
  created_at: string
  updated_at: string
}