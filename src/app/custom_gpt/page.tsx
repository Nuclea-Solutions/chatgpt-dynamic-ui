'use client';
import React, { useState, ChangeEvent } from 'react';
import ToggleCustomGPT from '@/stories/second_phase/toggle_customGPT/ToggleCustomGPT.component';
import HelpButtonComponent from '@/stories/help_button/HelpButton.component';
import AuthModalComponent from '@/stories/second_phase/authentication_modal/AuthModal.component';
import CustomGPTCreateSectionComponent from '@/stories/second_phase/custom_gpt_create_section/CustomGPTCreateSection.component';
import CustomGPTConfigureSectionComponent from '@/stories/second_phase/custom_gpt_configure_section/CustomGPTConfigureSection.component';
import CustomGPTNewActionSectionComponent from '@/stories/second_phase/custom_gpt_newAction_section/CustomGPTNewActionSection.component';
import CustomGPTPreviewSectionComponent from '@/stories/second_phase/custom_gpt_preview_section/CustomGPTPreviewSection.component';

const page = () => {
	const [isActive, setIsActive] = useState('create');
	const handleActiveView = (activeView: string) => {
		setIsActive(activeView);
	};
	const [examplesDropDow, setExamplesDropdown] = useState(false);
	const [examplesOptions, setExamplesOptions] = useState('');
	const [authTypeOpen, setAuthTypeOpen] = useState(false);
	const [authenticationType, setAuthenticationType] = useState('none');
	const [authType, setAuthType] = useState('basic');
	const [importFromUrl, setImportFromUrl] = useState(false);
	const [schemaValue, setSchemaValue] = useState('');
	const handleOpenImportFromUrl = () => setImportFromUrl(true);
	const handleCloseImportFromUrl = () => setImportFromUrl(false);

	const handleDeleteAction = () => {
		const confirmation = window.confirm('Are you sure you want to delete this action?');
		if (confirmation) handleActiveView('configure');
	};

	const handleTextareaValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setSchemaValue(e.currentTarget.value);
	};

	const handleAuthTypeModalOpen = () => {
		setAuthTypeOpen(true);
	};
	const handleAuthTypeModalClose = () => {
		setAuthTypeOpen(false);
	};

	const handleAuthenticationType = (e: ChangeEvent<HTMLInputElement>) => {
		setAuthenticationType(e.target.value);
	};

	const handleAuthType = (e: ChangeEvent<HTMLInputElement>) => {
		setAuthType(e.target.value);
	};

	const handleExaplesDropdow = () => {
		setExamplesDropdown((prev) => !prev);
	};

	const handleExaplesOptions = (value: string) => {
		setExamplesOptions(value);
	};

	return (
		<div className={`w-full relative dark:bg-[#444654] dark:text-white`}>
			<section
				className={`flex flex-col md:flex-row z-10`}
				style={{ height: 'calc(100vh - 64px)' }}
			>
				<div className={` ${isActive === 'newAction' ? 'hidden' : 'md:hidden'} `}>
					<ToggleCustomGPT handleActiveView={handleActiveView} isActive={isActive} />
				</div>
				<div className={`md:block flex-1 md:border `}>
					<div className={` ${isActive === 'newAction' ? 'hidden' : 'hidden md:block'} `}>
						<ToggleCustomGPT handleActiveView={handleActiveView} isActive={isActive} />
					</div>

					<CustomGPTCreateSectionComponent isActive={isActive} />

					<CustomGPTConfigureSectionComponent isActive={isActive} setIsActive={setIsActive} />

					<CustomGPTNewActionSectionComponent
						examplesDropDow={examplesDropDow}
						handleActiveView={handleActiveView}
						handleAuthTypeModalOpen={handleAuthTypeModalOpen}
						handleCloseImportFromUrl={handleCloseImportFromUrl}
						handleDeleteAction={handleDeleteAction}
						handleExaplesDropdow={handleExaplesDropdow}
						handleExaplesOptions={handleExaplesOptions}
						handleOpenImportFromUrl={handleOpenImportFromUrl}
						handleTextareaValue={handleTextareaValue}
						importFromUrl={importFromUrl}
						isActive={isActive}
						schemaValue={schemaValue}
						setExamplesDropdown={setExamplesDropdown}
						examplesOptions={examplesOptions}
					/>
				</div>

				<CustomGPTPreviewSectionComponent isActive={isActive} />
			</section>

			<div className='fixed bottom-2 right-4'>
				<HelpButtonComponent />
			</div>

			<div
				className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
					!authTypeOpen && 'hidden'
				} `}
			>
				<AuthModalComponent
					authType={authType}
					authenticationType={authenticationType}
					handleAuthType={handleAuthType}
					handleAuthenticationType={handleAuthenticationType}
					handleAuthTypeModalOpen={handleAuthTypeModalOpen}
					handleAuthTypeClose={handleAuthTypeModalClose}
					open={authTypeOpen}
				/>
			</div>
		</div>
	);
};

export default page;
