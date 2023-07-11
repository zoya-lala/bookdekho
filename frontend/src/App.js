import 'App.css';
import {
	HomePage,
	ProfilePage,
	SecondBar,
	ChatsPage,
	ProudDonors,
	DonateBooks,
	Description,
	Wishlist,
	AppBarr,
	SearchResults,
	MultipleImg,
} from 'components';
import '@fontsource/roboto/400.css';
import { Route, Routes } from 'react-router-dom';
import { Register } from 'components/Register';
import { SignIn } from 'components';

function App() {
	return (
		<div className='App'>
			<SecondBar />
			<AppBarr />
			<div className='ScrollableContainer'>
				<Routes>
					<Route
						path='/'
						element={<HomePage />}
						exact
					/>
					<Route
						path='/login'
						element={<SignIn />}
						exact
					/>
					<Route
						path='/register'
						element={<Register />}
						exact
					/>
					<Route
						path='/donate'
						element={<DonateBooks />}
						exact
					/>
					<Route
						path='/prouddonors'
						element={<ProudDonors />}
						exact
					/>
					<Route
						path='/search'
						element={<SearchResults />}
						exact
					/>
					<Route
						path='/BooksDescription/:_id'
						element={<Description />}
					/>

					{/* <Route path='/notifications' element={<NSActive />} exact /> */}
				</Routes>
				{/* <MultipleImg /> */}
				{/* <ProfilePage /> */}
				{/* <ChatsPage /> */}
				{/* <Description /> */}
				{/* <Wishlist /> */}
				{/* <SearchResults /> */}
				{/* <NSActive /> */}
			</div>
		</div>
	);
}

export default App;
