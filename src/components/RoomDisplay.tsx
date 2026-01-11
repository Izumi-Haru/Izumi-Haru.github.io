"use client";

import React from 'react';
import styles from './RoomDisplay.module.css';

interface RoomDisplayProps {
	overlayImage: string | null;
	onClose: () => void;
}

const RoomDisplay: React.FC<RoomDisplayProps> = ({ overlayImage, onClose }) => {
	return (
		<div className={styles.roomContainer}>
			<div className={styles.placeholderRoom}>
				<img
					src="/room.png"
					alt="room"
					className={styles.roomImage}
				/>
				{overlayImage && (
					<div className={styles.overlayContainer}>
						<img
							src={overlayImage}
							alt="overlay"
							className={styles.overlayImage}
						/>
						<button onClick={onClose} className={styles.closeButton}>
							<img src="/toziru.png" alt="Close" />
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default RoomDisplay;
