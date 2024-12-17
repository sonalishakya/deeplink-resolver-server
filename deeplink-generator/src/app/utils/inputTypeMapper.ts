const TYPE_MAP: Record<string, string> = {
	string: "text",
	number: "number",
	boolean: "checkbox",
	date: "date",
	time: "time",
	"datetime-local": "datetime-local",
};

export function inputTypeMapper(type: string): string {
	return TYPE_MAP[type] || "text";
}
