import { MODULE } from "../../config/routes/RoleProtectedRoute";
import User from '../../assets/icons/User.svg'
import bussinessDetails from '../../assets/icons/Shape.svg'
import Image from '../../assets/icons/Image.svg'
import Content from '../../assets/icons/Content Discount.svg'


export const sidepanalLinks = [
  {
    Title: "Business Profile",
   icons: bussinessDetails,
    Link: "/dashboard/edit-business-details",
    module: MODULE.BUSINESS,
  },
  {
    Title: "User Details / Security",
    Link: "/dashboard/edit-user",
     icons: User,
    module: MODULE.USER,
  },
  {
    Title: "My Businesses",
    Link: "/dashboard/business-details",
     icons: bussinessDetails,
    module: MODULE.USER,
  },
  {
    Title: "Content",
    Link: "/dashboard/content",
     icons: Content,
    module: MODULE.BUSINESS,
  },
  {
    Title: "Image Gallery",
    Link: "/dashboard/image-gallery",
     icons: Image,
    module: MODULE.BUSINESS,
  },
  {
    Title: "Business User",
    Link: "/dashboard/business-user",
     icons: User,
    module: MODULE.BUSINESS,
  }
];

export const status = {
  active: "Active",
  inActive: "Inactive",
  scheduled: "Scheduled",
};

export const socialMediaPost = [
  {
    status: status.active,
    discription: "Free Coffee with Breakfast Entre",
    image:
      "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    status: status.active,
    discription: "Free Coffee with Breakfast Entre",
    image:
      "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    status: status.scheduled,
    discription: "Free Coffee with Breakfast Entre",
    image:
      "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    status: status.inActive,
    discription: "Free Coffee with Breakfast Entre",
    image:
      "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    status: status.active,
    discription: "Free Coffee with Breakfast Entre",
    image:
      "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    status: status.active,
    discription: "Free Coffee with Breakfast Entre",
    image:
      "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    status: status.active,
    discription: "Free Coffee with Breakfast Entre",
    image:
      "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    status: status.active,
    discription: "Free Coffee with Breakfast Entre",
    image:
      "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    status: status.active,
    discription: "Free Coffee with Breakfast Entre",
    image:
      "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    status: status.active,
    discription: "Free Coffee with Breakfast Entre",
    image:
      "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    status: status.active,
    discription: "Free Coffee with Breakfast Entre",
    image:
      "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    status: status.active,
    discription: "Free Coffee with Breakfast Entre",
    image:
      "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    status: status.active,
    discription: "Free Coffee with Breakfast Entre",
    image:
      "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    status: status.active,
    discription: "Free Coffee with Breakfast Entre",
    image:
      "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    status: status.active,
    discription: "Free Coffee with Breakfast Entre",
    image:
      "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
