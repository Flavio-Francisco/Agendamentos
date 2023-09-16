import React, { useState } from 'react';
import{StarButton,StarText,StarContainer } from './styles'




interface StarRatingProps {
  maxStars: number;
  rating: number;
  onRatingPress: (rating: number) => void;
}

 const StarFixer: React.FC<StarRatingProps> = ({ maxStars, rating, onRatingPress }) => {
  const [selectedRating, setSelectedRating] = useState(rating);

  const handleStarPress = (selected: number) => {
    setSelectedRating(selected);
    onRatingPress(selected);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <=5; i++) {
      stars.push(
        <StarButton key={i}>
          <StarText>{i <= selectedRating ? '★' : '☆'}</StarText>
        </StarButton>
      );
    }
    return stars;
  };

  return (
    <StarContainer>
      {renderStars()}
    </StarContainer>
  );
};

export default StarFixer;
