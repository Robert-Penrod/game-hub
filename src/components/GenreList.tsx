import {
    HStack,
    List,
    ListItem,
    Image,
    Text,
    Spinner,
    Button,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSekelton from "./GenreSekelton";

interface Props {
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
    const { data, isLoading, error } = useGenres();
    const skeletons = [1, 2, 3, 4, 5, 6];

    if (error) return null;

    if (isLoading)
        return (
            <List>
                {skeletons.map((x) => {
                    return (
                        <ListItem key={x} paddingY='5px'>
                            <GenreSekelton />
                        </ListItem>
                    );
                })}
            </List>
        );

    return (
        <List>
            {data.map((genre) => (
                <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image
                            boxSize='32px'
                            borderRadius={8}
                            src={getCroppedImageUrl(genre.image_background)}
                        />
                        <Button
                            onClick={() => onSelectGenre(genre)}
                            fontSize='lg'
                            variant='link'
                        >
                            {genre.name}
                        </Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
