import { createBoard } from '@wixc3/react-board';
import { ServiceSection } from '../../../components/service-section/service-section';
import ServiceSection_board_module from './service-section.board.module.scss';

export default createBoard({
    name: 'ServiceSection',
    Board: () => <ServiceSection />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1052,
    },
});
