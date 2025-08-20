export interface ClerkWebhook {
	type: string;
	data: {
		id: string;
		email_addresses: { email_address: string }[];
		first_name?: string;
		last_name?: string;
		image_url?: string;
	};
}
