import { User } from "@/types/user";
import GuestHeader from "../GuestHeader/GuestHeader";
import UserHeader from "../UserHeader/UserHeader";

const Header = ({ user }: { user: User | null }) => user ? <UserHeader user={user} /> : <GuestHeader />;

export default Header;