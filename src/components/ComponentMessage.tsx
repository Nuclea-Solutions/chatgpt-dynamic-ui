import { COMPONENTS_REF } from '@/hooks/useChatCustom/utils';

const ComponentMessage = ({
	component,
	value,
	componentProps
}: {
	component: string;
	value?: string;
	componentProps?: { rows: any[]; columns: any[] };
}) => {
	const Component = COMPONENTS_REF[component] && COMPONENTS_REF[component].component;

	if (!Component) return <div className='italic'></div>;
	if (component === 'table_view') {
		return <Component columns={componentProps?.columns ?? []} rows={componentProps?.rows ?? []} />;
	} else if (component.includes('calendar')) {
		const CalendarComponent = COMPONENTS_REF['calendar_button'].component;
		return <CalendarComponent />;
	} else {
		return <Component onChange={() => null} value={value ?? ''} />;
	}
};

export default ComponentMessage;
