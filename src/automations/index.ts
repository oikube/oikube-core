export function OikubeAutomationService({ createHook }) {
	createHook(OikubeAutomationService.AUTOMATIONS_INIT);
}
OikubeAutomationService.AUTOMATIONS_INIT = `automations/init`;
