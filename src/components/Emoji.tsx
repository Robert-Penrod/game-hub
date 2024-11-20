import firstRatingImg from "../assets/bulls-eye.webp";
import secondRatingImg from "../assets/thumbs-up.webp";
import thirdRatingImg from "../assets/meh.webp";
import { ImageProps, Image } from "@chakra-ui/react";

interface Props {
    rating: number;
}

const Emoji = ({ rating }: Props) => {
    if (rating < 3) return null;

    const emojiMap: { [key: number]: ImageProps } = {
        3: { src: thirdRatingImg, alt: "meh", boxSize: "25px" },
        4: { src: secondRatingImg, alt: "recommended", boxSize: "25px" },
        5: { src: firstRatingImg, alt: "exceptional", boxSize: "35px" },
    };

    return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
