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
    Board: () => <ServiceCardR />,
    isSnippet: true,
});