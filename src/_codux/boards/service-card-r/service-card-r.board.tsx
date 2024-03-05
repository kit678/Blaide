import { createBoard } from '@wixc3/react-board';
import { ServiceCardR } from '../../../components/service-card-r/service-card-r';

export interface ServiceCardRProps {
    className?: string;
    heading: "dfdf";
    description: "dfdfdfdf";
    img: "dfdf";
}

export default createBoard({
    name: 'ServiceCardR',
    Board: () => <ServiceCardR 
                    className="example-class"
                    heading="Sample Heading"
                    description="This is a sample description for the ServiceCardR component."
                    img="../../../assets/img1.webp"
                    img="..\..\..\assets\img1.webp"

                 />,
    isSnippet: true,
});
