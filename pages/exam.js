import QnASection from "../components/QnASection/QnASection";
import {listQuestion} from "../utils/dataConfig"

export default function Exam(){
    return (
        <QnASection data={listQuestion} />
    )
}