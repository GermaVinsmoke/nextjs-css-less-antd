import Head from 'next/head';
import Link from 'next/link';
import { Button } from 'antd';
import Layout from '../../components/layout';
import styles from '../../styles/first-post.module.css';

export default function FirstPost() {
	return (
		<Layout>
			<Head>
				<title>First Post</title>
			</Head>
			<h1>First Post</h1>
			<h2>
				<Link href="/">
					<a>Back to Home</a>
				</Link>
			</h2>
			<p>Test the font size - Global CSS</p>
			<p className={styles.modularPara}>Test the font size - Modular CSS</p>
			<Button type="primary">Primary</Button>
		</Layout>
	);
}
