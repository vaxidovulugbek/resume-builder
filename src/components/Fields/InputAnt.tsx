import { Input } from "antd";
import { get } from "lodash";
import { useEffect, useState } from "react";
import cn from "classnames";
import "./styles.scss";
import { useDispatch } from "react-redux";
import { ResInfo } from "../../redux/actions";

export default function InputField({
	label,
	form,
	field,
	placeholder,
	type,
	onChange,
	touched,
	id,
	...props
}: {
	label: string;
	type: string;
	form: any;
	field: any;
	placeholder: string;
	touched: any;
	onChange: any;
	id: any;
}) {
	const hasError = get(form.touched, field.name) && get(form.errors, field.name);
	const dispatch = useDispatch();
	useEffect(() => {
		// console.log(field, form.values.name);
		dispatch(ResInfo?.setResumeName(form.values.name));
	}, [form.values]);

	const [inputType, setType] = useState(type);

	return (
		<div className={cn({ error: hasError, "w-full": !hasError })}>
			{label ? <label className="text-xs">{label}</label> : null}
			<Input
				style={hasError && { border: "1px solid #ff4d4f" }}
				type={inputType}
				defaultValue={get(form.values, field.name)}
				placeholder={placeholder}
				id={field.name}
				onBlur={field.onBlur}
				onChange={field.onChange}
				value={get(form.values.name, field.name)}
				{...props}
			/>
			{hasError ? (
				<small style={hasError && { color: "#ff4d4f" }} className="error-type">
					{get(form.errors, field.name)}
				</small>
			) : null}
		</div>
	);
}
