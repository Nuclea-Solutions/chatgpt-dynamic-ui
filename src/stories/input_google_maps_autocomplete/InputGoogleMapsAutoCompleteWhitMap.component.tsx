import React, { useRef, useState } from 'react';
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox } from '@react-google-maps/api';
import { Input } from '@nextui-org/react';

interface Location {
	lat: number;
	lng: number;
}

const initialCenter: Location = {
	lat: 19.41116,
	lng: -102.05644
};

const InputGoogleMapsAutoCompleteWhitMapComponent = ({ API_KEY }: { API_KEY: string }) => {
	const inputRef = useRef<any>(null);
	const [map, setMap] = useState<google.maps.Map | null>(null);
	const [center, setCenter] = useState<Location>(initialCenter);

	const handlePlaceChanged = () => {
		const [place] = inputRef.current?.getPlaces() || [];
		if (place) {
			const newCenter: Location = {
				lat: place.geometry.location.lat(),
				lng: place.geometry.location.lng()
			};
			setCenter(newCenter);
		}
	};

	const onLoad = (map: google.maps.Map) => {
		setMap(map);
	};

	const onUnmount = () => {
		setMap(null);
	};

	return (
		<LoadScript googleMapsApiKey={API_KEY} libraries={['places']}>
			<div className='flex flex-col gap-10 '>
				<StandaloneSearchBox
					onLoad={(ref) => (inputRef.current = ref)}
					onPlacesChanged={handlePlaceChanged}
				>
					<Input
						isClearable
						type='text'
						variant='bordered'
						placeholder='Buscar un lugar...'
						onClear={() => {}}
						className='w-full max-w-96'
					/>
				</StandaloneSearchBox>
				<GoogleMap
					center={center}
					zoom={13}
					onLoad={onLoad}
					onUnmount={onUnmount}
					mapContainerStyle={{ width: '100%', height: '400px', maxWidth: '400px' }}
				>
					<Marker position={center} />
				</GoogleMap>
			</div>
		</LoadScript>
	);
};
export default InputGoogleMapsAutoCompleteWhitMapComponent;
