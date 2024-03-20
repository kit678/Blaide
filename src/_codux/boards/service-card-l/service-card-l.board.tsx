import { createBoard } from '@wixc3/react-board';
import { ServiceCardL } from '../../../components/service-card-l/service-card-l';

export interface ServiceCardRProps {
    className?: string;
    heading: 'dfdf';
    description: 'dfdfdfdf';
    img: 'dfdf';
}

export default createBoard({
    name: 'ServiceCardL',
    Board: () => (
        <ServiceCardL
            className="example-class"
            heading="Sample Heading"
            description="This is a sample description for the ServiceCardR component.This is a sample description for the ServiceCardR component.This is a sample description for the ServiceCardR component.This is a sample description for the ServiceCardR component.This is a sample description for the ServiceCardR component."
            img="https://cdn-icons-png.flaticon.com/512/1005/1005015.png"
        />
    ),

    isSnippet: true,

    environmentProps: {
        windowWidth: 1084,
    },
});
