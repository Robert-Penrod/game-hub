import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSekelton from "./GenreSekelton";

const GenreList = () => {
    const { data, isLoading, error } = useGenres();
    const skeletons = [1, 2, 3, 4, 5, 6];

    if (error) return null;

    if (isLoading)
        return (
            <List>
                {skeletons.map((x, index) => {
                    return (
                        <ListItem key={index} paddingY='5px'>
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
                        <Text fontSize='lg'>{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
