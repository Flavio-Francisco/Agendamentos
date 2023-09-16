import React, { useState } from 'react';
import{StarButton,StarText,StarContainer } from './styles'




interface StarRatingProps {
  maxStars: number;
  rating: number;
  onRatingPress: (rating: number) => void;
}

 const StarRating: React.FC<StarRatingProps> = ({ maxStars, rating, onRatingPress }) => {
  const [selectedRating, setSelectedRating] = useState(rating);

  const handleStarPress = (selected: number) => {
    setSelectedRating(selected);
    onRatingPress(selected);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= maxStars; i++) {
      stars.push(
        <StarButton key={i} onPress={() => handleStarPress(i)}>
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

export default StarRating;
