import { MenuItem } from '@/types/types';
import { IoEyeOutline, IoPencil } from 'react-icons/io5';
import Image from 'next/image';
import userBlacklist from '/icons/userBlacklist.svg';
import usercheck from '/icons/usercheck.svg';

const menuItems: MenuItem[] = [
  {
    icons: <IoEyeOutline />,
    label: 'View',
    key: 'view',
  },
  {
    icons: <Image src={usercheck} alt='Blacklist' width={20} height={20} />,
    label: 'Edit',
    key: 'edit',
  },
  {
    icons: <Image src={userBlacklist} alt='Blacklist' width={20} height={20} />,
    label: 'Blacklist',
    key: 'blacklist',
  },
];
