import { Button, Box, ButtonIcon, ButtonText } from "@gluestack-ui/themed"

export default function Controls({ setVolume, volume }){
    return(
        <Box >
            <Button onPress={() => setVolume(volume + 250)}>
                <ButtonText >
                    Add 🥛
                </ButtonText>
            </Button>
            <Button onPress={() => setVolume(volume + 750)}>
                <ButtonText>
                    Add 🫙
                </ButtonText>
            </Button>
            <Button onPress={() => setVolume(0)}>
                <ButtonText>
                    Reset
                </ButtonText>
            </Button>
        </Box>
    )
}