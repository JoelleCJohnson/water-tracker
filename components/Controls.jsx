import { Button, Box, ButtonIcon, ButtonText } from "@gluestack-ui/themed"

export default function Controls({ setVolume, volume }){
    return(
        <Box flexDirection="row" flexWrap="wrap" justifyContent="center" mt="$8">
            <Button m="$2" rounded="$xl" size="xl" onPress={() => setVolume(volume + 250)}>
                <ButtonText >
                    Add 🥛
                </ButtonText>
            </Button>
            <Button m="$2" rounded="$xl" size="xl" onPress={() => setVolume(volume + 750)}>
                <ButtonText>
                    Add 🫙
                </ButtonText>
            </Button>
            <Button m="$2" rounded="$xl" size="xl" onPress={() => setVolume(0)}>
                <ButtonText>
                    Reset
                </ButtonText>
            </Button>
        </Box>
    )
}