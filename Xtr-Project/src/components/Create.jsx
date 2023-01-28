import  { useState, useEffect,React } from 'react';
import axios from 'axios';
import { Container, Button, Card, Row, FloatingLabel, Form} from "react-bootstrap";

const client = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/posts',
});

const Create = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [posts, setPosts] = useState([]);

	// GET with Axios
	useEffect(() => {
		const fetchPost = async () => {
			try {
				let response = await client.get('?_limit=10');
				setPosts(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchPost();
	}, []);

	// DELETE with Axios
	const deletePost = async (id) => {
		try {
			await client.delete(`${id}`);
			setPosts(
				posts.filter((post) => {
					return post.id !== id;
				})
			);
		} catch (error) {
			console.log(error);
		}
	};

	// handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		addPosts(title, body);
	};

	// POST with Axios
	const addPosts = async (title, body) => {
		try {
			let response = await client.post('', {
				title: title,
				body: body,
			});
			setPosts([response.data, ...posts]);
			setTitle('');
			setBody('');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container>
			<nav>
				<h3 className='d-flex justify-content-center'>POSTS APP</h3>
			</nav>
			<Row>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						className="form-control"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<textarea
						name=""
						className="form-control"
						id=""
						cols="10"
						rows="8"
						value={body}
						onChange={(e) => setBody(e.target.value)}
					></textarea>
					<Button size='sm' type="submit">Add Post</Button>
				</form>
			</Row>
			<div className="posts-container">
				<h2>All Posts 📫</h2>
				{posts.map((post) => {
					return (
						<div className="post-card" key={post.id}>
							<h2 className="post-title">{post.title}</h2>
							<p className="post-body">{post.body}</p>
							<div className="button">
								<Button size='sm' variant='danger' className="" onClick={() => deletePost(post.id)}>
									Delete
								</Button>
							</div>
						</div>
					);
				})}
			</div>
		</Container>
	);
};

export default Create;