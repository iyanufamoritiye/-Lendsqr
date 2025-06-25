import { toast } from 'react-toastify';
import { useState } from 'react';
import { HiDotsVertical } from 'react-icons/hi';
import { MenuItem, UserData } from '@/types/types';

interface ToggleOptionProps {
  menuItems: MenuItem[];
  data: UserData;
  handleView: (data: UserData) => void;
  handleBlacklist: (data: UserData) => void;
  handleActivate: (data: UserData) => void;
}
const ToggleOption: React.FC<ToggleOptionProps> = ({
  menuItems,
  data,
  handleView,
  handleBlacklist,
  handleActivate,
}) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleMenuToggle = (data: UserData) => {
    setOpenMenu(openMenu === data.id ? null : data.id);
  };

  const handleMenuClick = (item: MenuItem) => {
    if (!item?.key || !data?.id) {
      toast.error('Invalid item or row. Please try again.');
      return;
    }

    if (item.key === 'view') {
      handleView(data);
    } else if (item.key === 'block') {
      handleBlacklist(data);
    } else if (item.key === 'activate') {
      handleActivate(data);
    }
  };

  const renderMenuItems = (data: UserData) =>
    menuItems.map((item: MenuItem) => (
      <li
        key={item.key}
        className={`px-4 py-2 font-medium font-helvetica-neue text-[#808080] hover:bg-gray-300 cursor-pointer text-sm
                ${item.label === 'Delete' ? 'text-red-500' : ''}`}
        onClick={() => handleMenuClick(item)}
      >
        <span className='w-5 h-5 flex items-center justify-center'>
          {item.icons}
        </span>
        <span>{item.label}</span>
        {item.label}
      </li>
  ));
  return (
    <div className='relative'>
      <button
        type='button'
        className='text-gray-600 hover:text-gray-900 focus:outline-none'
        onClick={() => handleMenuToggle(data)}
        aria-label='Open menu'
        data-testid='toggle-menu'
      >
        <HiDotsVertical />
      </button>
      {openMenu === data.id && (
        <ul className='absolute right-0 mt-2 w-40 bg-gray-50 shadow-xl  rounded-lg py-2 z-10'>
          {renderMenuItems(data)}
        </ul>
      )}
    </div>
  );
};

export default ToggleOption;
