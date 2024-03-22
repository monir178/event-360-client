export const useFadeIn = () => {
    const fade = {
        hidden: {
            opacity: 0,

        },
        visible: {
            opacity: 1,

            transition: {
                duration: 0.6,

                ease: "easeInOut",
            },
        },
    }
    return fade;

}