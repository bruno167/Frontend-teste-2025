export type CourseType = {
  live: boolean;
  online: boolean;
  presential: boolean;
};

export type Settings = {
  city: string | null;
  state: string | null;
  end_at: string;
  start_at: string;
  course_types: CourseType;
  manual_watched: boolean;
  highlight_banner: boolean;
};

export type Store = {
  id: number;
  name: string;
  slug: string;
  timezone: string;
  brand_id: number;
};

export type LowestOffer = {
  promo_price: number | null;
  original_price: number | null;
  type_offer: string;
};

export type Course = {
  id: number;
  title: string;
  slug: string;
  status: string;
  short_description: string;
  long_description: string;
  created_at: string;
  updated_at: string;
  tags: string[];
  settings: Settings;
  level: string;
  has_certificate: boolean;
  visibility: string;
  allow_comments: string;
  featured: boolean;
  featured_order: number | null;
  has_free_offer: boolean;
  statement: string | null;
  schedule: string | null;
  show_subjects_menu: boolean;
  banner: string;
  banner_mobile: string;
  thumbnail_vertical: string | null;
  thumbnail: string;
  duration: string;
  categories: string[];
  store: Store;
  teachers: string[];
  publishable: boolean;
  certificate_image: string | null;
  tickets_qty: number;
  classrooms_qty: number;
  lowest_offer: LowestOffer;
  offer_currency: string | null;
  lesson_types: string[];
  isFavorite: boolean;
  favoriteOrder?: number;
};

export type CoursesResponse = {
  courses: Course[];
};
