import { BookingStatus } from '@/common/enums/booking-status.enum';
import { PaymentType } from '@/common/enums/payment-type.enum';

export type Reservation = {
  id: number;
  tourId: number;
  arrivalDate: string;
  checkoutDate: string;
  numberOfTravellers: number;
  totalAmount: number;
  status: BookingStatus;
  notes?: string;
  createdAt: string;
  updatedAt: string;
  payment?: {
    id: number;
    amount: number;
    type: PaymentType;
  };
  tour: {
    title: string;
    minGuests: number;
    maxGuests: number;
  };
};

export type ReservationResponse = {
  success: boolean;
  data: {
    data: Reservation[];
    meta: {
      total: number;
      page: number;
      limit: number;
      totalPages: number;
    };
  };
  message?: string;
};

export type ReservationFilters = {
  page: number;
  limit: number;
};
