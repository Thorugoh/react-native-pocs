import { Text, TouchableOpacity, View } from "react-native"


type ServerSideProps = {
    component: "text" | "view" | "touchableOpacity"
    props: Record<string, unknown>
    children: Array<ServerSideProps>
    name: string
    content?: string
}

type Props = {
    data: Array<ServerSideProps>
    theme: "dark" | "light"
}

export const RecursiveComponent = ({data, theme}: Props) => {
    return data.map(item => {
        const Component = ComponentMapping[item.component]
        
        return (
            <Component key={item.name} {...item.props}>
                {item.content && item.content}
                {item.children && <RecursiveComponent data={item.children} theme={theme} />}
            </Component>
        )
    })

}

const ComponentMapping = {
    text: Text,
    view: View,
    touchableOpacity: TouchableOpacity
 }