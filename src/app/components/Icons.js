import { HiHomeModern, HiBars3, HiXMark, HiOutlineAcademicCap, HiOutlineBuildingLibrary, HiOutlineUserGroup, HiOutlineInformationCircle, } from "react-icons/hi2";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { RiParentFill } from "react-icons/ri";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { IoMdContacts } from "react-icons/io";
import { LuChevronDown } from "react-icons/lu";

/**
 * This is your central icon library.
 *
 * 1. Import the icon you want from `react-icons/*`.
 * 2. Add it to the `iconMap` object with a simple, memorable name.
 *
 * Now you can use `<Icon name="simple-name" />` anywhere in your app.
 */
export const iconMap = {
  // Navigation
  home: HiHomeModern,
  menu: HiBars3,
  close: HiXMark,
  about: HiOutlineInformationCircle,
  contact: IoMdContacts,
  dropDown:LuChevronDown,

  // School Sections
  academics: HiOutlineAcademicCap,
  admissions: HiOutlineUserGroup,
  campus: HiOutlineBuildingLibrary,
  stedent: PiStudentFill,
  parent: RiParentFill,
  teacher: LiaChalkboardTeacherSolid,


  // Social Media
  facebook: FaFacebook,
  twitter: FaTwitter,
  instagram: FaInstagram,
};