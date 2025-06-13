import multer from 'multer';

// Configura tu storage según tus necesidades
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads/'); // ajusta la carpeta de destino
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + '-' + file.originalname);
	},
});

export const upload = multer({ storage });
export const uploadSingle = multer({ storage }).single('imagen');
