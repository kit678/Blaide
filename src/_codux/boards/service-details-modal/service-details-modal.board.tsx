import { createBoard } from '@wixc3/react-board';
import { ServiceDetailsModal } from '../../../components/service-details-modal/service-details-modal';

export default createBoard({
    name: 'ServiceDetailsModal',
    Board: () => <ServiceDetailsModal />,
    isSnippet: true,
});