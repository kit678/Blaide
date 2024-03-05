import { createBoard } from '@wixc3/react-board';
import { ServiceCardR } from '../../../components/service-card-r/service-card-r';

export interface ServiceCardRProps {
    className?: string;
    heading: 'dfdf';
    description: 'dfdfdfdf';
    img: 'dfdf';
}

export default createBoard({
    name: 'ServiceCardR',
    Board: () => (
        <ServiceCardR
            className="example-class"
            heading="Sample Heading"
            description="This is a sample description for the ServiceCardR component.This is a sample description for the ServiceCardR component.This is a sample description for the ServiceCardR component.This is a sample description for the ServiceCardR component.This is a sample description for the ServiceCardR component."
            img="https://cdn-icons-png.flaticon.com/512/1005/1005015.png"
        />
    ),

    isSnippet: true,

    environmentProps: {
        windowWidth: 652,
    },
});
