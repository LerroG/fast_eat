import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const formSchema = z
	.object({
		email: z.string().email(),
		password: z.string().min(3),
		passwordConfirm: z.string(),
	})
	.refine(
		(data) => {
			return data.password === data.passwordConfirm;
		},
		{
			message: 'Passwords do not match',
			path: ['passwordConfirm'],
		}
	);

const Register = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
			passwordConfirm: '',
		},
	});

	const handleSubmit = (values: z.infer<typeof formSchema>) => {
		console.log({ values });
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(handleSubmit)}
				className='max-w-lg w-4/5 flex flex-col gap-4'
			>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => {
						return (
							<FormItem>
								<FormLabel>Email address</FormLabel>
								<FormControl>
									<Input
										placeholder='Email address'
										type='email'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>
				<FormField
					control={form.control}
					name='password'
					render={({ field }) => {
						return (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input
										placeholder='Password'
										type='password'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>
				<FormField
					control={form.control}
					name='passwordConfirm'
					render={({ field }) => {
						return (
							<FormItem>
								<FormLabel>Password confirm</FormLabel>
								<FormControl>
									<Input
										placeholder='Password confirm'
										type='password'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>
				<Button
					type='submit'
					className='w-full'
				>
					Sign up
				</Button>
			</form>
		</Form>
	);
};

export default Register;
