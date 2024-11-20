import { Box, HStack } from "@chakra-ui/react";
import { FaRegStar, FaStar } from "react-icons/fa";

interface Props {
    rating: number;
}

const GameRating = ({ rating }: Props) => {
    const ratings = [1, 2, 3, 4, 5];

    return (
        <HStack>
            {ratings.map((value) => {
                return (
                    <Box key={value} marginTop={1} color='#ffffff33'>
                        {value <= rating ? (
                            <FaStar size={20} />
                        ) : (
                            <FaRegStar size={20} />
                        )}
                    </Box>
                );
            })}
        </HStack>
    );
};

export default GameRating;
