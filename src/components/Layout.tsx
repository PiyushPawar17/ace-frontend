const Layout: React.FC<{
	children?: React.ReactNode;
	className?: string;
}> = ({ children, className }) => {
	return (
		<section
			className={`xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-lg max-w-xs mx-auto px-4 sm:px-0 ${className}`}
		>
			{children}
		</section>
	);
};

export default Layout;
