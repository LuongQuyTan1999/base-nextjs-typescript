import DriverManagementIcon from "public/img/layout/driver-management";
import UserIcon from "public/img/layout/user";
// import WarningIcon from "public/img/layout/accident";
import BookingIcon from "public/img/layout/booking";
import WalletIcon from "public/img/layout/wallet";
import PayoutIcon from "public/img/layout/payout";
// import ServiceIcon from "public/img/layout/service";
import RoleIcon from "public/img/layout/role";

export const MenuData = [
  {
    href: "/",
    icon: DriverManagementIcon,
    title: "Driver Management",
    subHref: ["/driver-management/[id]"],
  },
  {
    href: "/user-management",
    icon: UserIcon,
    title: "User management",
    subHref: ["/user-management/[id]"],
  },
  // {
  //   href: "/accident-management",
  //   icon: WarningIcon,
  //   title: "Accident management",
  // },
  {
    href: "/booking-management",
    icon: BookingIcon,
    title: "Booking management",
    subHref: ["/booking-management/[id]", "/booking-management/inventory/[id]"],
  },
  {
    href: "/role-management",
    icon: RoleIcon,
    title: "Role management",
  },
  {
    href: "/payment-management",
    icon: WalletIcon,
    title: "Payment management",
    subHref: ["/payment-management/[id]"],
  },
  {
    href: "/payout-management",
    icon: PayoutIcon,
    title: "Payout management",
    subHref: ["/payout-management/[id]"],
  },
];
