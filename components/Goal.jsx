import { VStack, Text, Progress, ProgressFilledTrack } from "@gluestack-ui/themed"

export default function Goal({ volume }){

    const GOAL = 3000

    return(
        <VStack justifyContent="space-around" h={180} alignItems="center" py="$8" px="$4">
            <Text color="$blue800" fontSize="lg" fontWeight="500">Goal: {GOAL} mL</Text>
            <Progress w={300} size="lg" value={100 * (volume / GOAL)} bg="$blue200">
                <ProgressFilledTrack bg="$blue500"/>
            </Progress>
            <Text color="$blue800" fontWeight="500" fontSize="xl">Today's total: {volume} mL</Text>
        </VStack>
    )
}