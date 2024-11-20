import {
    HStack,
    List,
    ListItem,
    Image,
    Text,
    Spinner,
    Button,
    Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSekelton from "./GenreSekelton";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
    const { data, isLoading, error } = useGenres();
    const skeletons = [1, 2, 3, 4, 5, 6];

    if (error) return null;

    return (
        <>
            <Heading fontSize='2xl' marginBottom={3}>
                Genres
            </Heading>
            {isLoading ? (
                <List>
                    {skeletons.map((x) => {
                        return (
                            <ListItem key={x} paddingY='5px'>
                                <GenreSekelton />
                            </ListItem>
                        );
                    })}
                </List>
            ) : (
                <List>
                    {data.map((genre) => (
                        <ListItem key={genre.id} paddingY='5px'>
                            <HStack>
                                <Image
                                    objectFit='cover'
                                    boxSize='32px'
                                    borderRadius={8}
                                    src={getCroppedImageUrl(
                                        genre.image_background
                                    )}
                                />
                                <Button
                                    whiteSpace='normal'
                                    textAlign='left'
                                    fontWeight={
                                        genre.id === selectedGenre?.id
                                            ? "bold"
                                            : "normal"
                                    }
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
            )}
        </>
    );
};

export default GenreList;
