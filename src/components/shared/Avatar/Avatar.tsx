import React from 'react';
import { generateHexColor } from '../../../utils/generateHexColor';
import './Avatar.scss';

type TAvatarSizes = 'small' | 'middle' | 'large';

interface IAvatarProps {
  size: TAvatarSizes;
  id?: string;
  fullName?: string;
  avatar?: string;
  response: boolean;
}

const getInitials = (fullName?: string): string => {
  if (fullName) {
    return fullName
      .trim()
      .split(' ')
      .slice(0, 2)
      .map(word => word[0])
      .join('')
      .toUpperCase();
  }

  return '';
};

const Avatar: React.FC<IAvatarProps> = ({
  size,
  id,
  fullName,
  avatar,
  response,
}: IAvatarProps) => {
  let options;

  switch (size) {
    case 'large':
      options = {
        width: '142px',
        height: '142px',
        border: '4px solid white',
        fontSize: '64px',
      };
      break;
    case 'small':
      options = {
        width: '40px',
        height: '40px',
        fontSize: '15px',
      };
      break;
    default:
      options = {
        width: '48px',
        height: '48px',
        fontSize: '19px',
      };
      break;
  }

  if (avatar) {
    return (
      <a className="avatar" style={options} href={response ? `/user/${id}` : undefined}>
        <div className="avatar__wrapper" style={{ backgroundColor: '#c4cfd6' }}>
          <img className={response ? "response" : ""} src={avatar} alt="Avatar" />
        </div>
      </a>
    );
  }

  return (
    <a className="avatar" style={options} href={response ? `/user/${id}` : undefined}>
      <div
        className="avatar__wrapper" style={{ backgroundColor: generateHexColor(fullName) }}>
        <div className={response ? "avatar__background response" : "avatar__background"}>
          <div className="avatar__text">{getInitials(fullName)}</div>
        </div>
      </div>
    </a>
  );
};

export default Avatar;
