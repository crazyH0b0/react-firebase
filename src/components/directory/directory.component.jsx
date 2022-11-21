import DirectoryItem from '../directory-item/directory-item.component';
import { Outlet } from 'react-router-dom';
import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'hats',
    imageUrl: 'https://www.crown-clothes.com/images/hats.jpg',
    route: 'shop/hats',
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl: 'https://www.crown-clothes.com/images/jackets.jpg',
    route: 'shop/jackets',
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl: 'https://www.crown-clothes.com/images/sneakers.jpg',
    route: 'shop/sneakers',
  },
  {
    id: 4,
    title: 'womens',
    imageUrl: 'https://www.crown-clothes.com/images/womens.jpg',
    route: 'shop/womens',
  },
  {
    id: 5,
    title: 'mens',
    imageUrl: '	https://www.crown-clothes.com/images/men.jpg',
    route: 'shop/mens',
  },
];

const Directory = () => {
  return (
    <>
  
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
        ))}
    </DirectoryContainer>
        </>
  );
};

export default Directory;