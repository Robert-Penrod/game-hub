import { HStack, Image, Skeleton, SkeletonText, Text } from "@chakra-ui/react";
import React from "react";
import getCroppedImageUrl from "../services/image-url";

const GenreSekelton = () => {
    return (
        <HStack>
            <Skeleton>
                <Image boxSize='32px' borderRadius={8} />
            </Skeleton>
            <SkeletonText noOfLines={2}>
                <Text fontSize='lg'>test</Text>
            </SkeletonText>
        </HStack>
    );
};

export default GenreSekelton;
