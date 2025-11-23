import 'package:flutter/material.dart';

void main() {
  runApp(const FitYaarTestApp());
}

class FitYaarTestApp extends StatelessWidget {
  const FitYaarTestApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'FitYaar Test',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFFB4A5F6), // Pastel Purple
          brightness: Brightness.light,
        ),
        useMaterial3: true,
      ),
      home: const TestHomePage(),
    );
  }
}

class TestHomePage extends StatefulWidget {
  const TestHomePage({super.key});

  @override
  State<TestHomePage> createState() => _TestHomePageState();
}

class _TestHomePageState extends State<TestHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  void _decrementCounter() {
    setState(() {
      _counter--;
    });
  }

  void _resetCounter() {
    setState(() {
      _counter = 0;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0,
        title: const Text(
          'FitYaar Setup Test',
          style: TextStyle(
            color: Colors.black,
            fontWeight: FontWeight.bold,
            fontSize: 24,
          ),
        ),
        centerTitle: true,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            // Logo placeholder
            Container(
              width: 120,
              height: 120,
              decoration: BoxDecoration(
                color: const Color(0xFFB4A5F6), // Pastel Purple
                borderRadius: BorderRadius.circular(24),
              ),
              child: const Icon(
                Icons.fitness_center,
                size: 64,
                color: Colors.white,
              ),
            ),
            const SizedBox(height: 40),
            
            // Success message
            Container(
              margin: const EdgeInsets.symmetric(horizontal: 40),
              padding: const EdgeInsets.all(20),
              decoration: BoxDecoration(
                color: const Color(0xFFE3F5E8), // Pastel Green
                borderRadius: BorderRadius.circular(20),
              ),
              child: const Column(
                children: [
                  Icon(
                    Icons.check_circle,
                    color: Color(0xFF34C759),
                    size: 48,
                  ),
                  SizedBox(height: 12),
                  Text(
                    '🎉 Setup Working!',
                    style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.bold,
                      color: Colors.black,
                    ),
                  ),
                  SizedBox(height: 8),
                  Text(
                    'Remote ADB connection successful',
                    style: TextStyle(
                      fontSize: 14,
                      color: Color(0xFF6B6B6B),
                    ),
                    textAlign: TextAlign.center,
                  ),
                ],
              ),
            ),
            const SizedBox(height: 40),
            
            // Counter test
            const Text(
              'Test Hot Reload:',
              style: TextStyle(
                fontSize: 18,
                color: Color(0xFF6B6B6B),
              ),
            ),
            const SizedBox(height: 16),
            
            // Counter display
            Container(
              padding: const EdgeInsets.all(24),
              decoration: BoxDecoration(
                color: const Color(0xFFD4E7F7), // Pastel Blue
                borderRadius: BorderRadius.circular(20),
              ),
              child: Text(
                '$_counter',
                style: const TextStyle(
                  fontSize: 72,
                  fontWeight: FontWeight.bold,
                  color: Colors.black,
                ),
              ),
            ),
            const SizedBox(height: 24),
            
            // Buttons
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                // Decrement button
                _buildButton(
                  icon: Icons.remove,
                  color: const Color(0xFFFFE8F0), // Pastel Pink
                  onPressed: _decrementCounter,
                ),
                const SizedBox(width: 16),
                
                // Reset button
                _buildButton(
                  icon: Icons.refresh,
                  color: const Color(0xFFF5EFE7), // Pastel Beige
                  onPressed: _resetCounter,
                ),
                const SizedBox(width: 16),
                
                // Increment button
                _buildButton(
                  icon: Icons.add,
                  color: const Color(0xFFE3F5E8), // Pastel Green
                  onPressed: _incrementCounter,
                ),
              ],
            ),
            const SizedBox(height: 40),
            
            // Instructions
            Container(
              margin: const EdgeInsets.symmetric(horizontal: 40),
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: const Color(0xFFF5F5F7),
                borderRadius: BorderRadius.circular(16),
              ),
              child: const Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    '✅ Test Checklist:',
                    style: TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.bold,
                      color: Colors.black,
                    ),
                  ),
                  SizedBox(height: 8),
                  Text(
                    '• App running on phone? ✓',
                    style: TextStyle(fontSize: 14, color: Color(0xFF6B6B6B)),
                  ),
                  Text(
                    '• Buttons working? Tap them!',
                    style: TextStyle(fontSize: 14, color: Color(0xFF6B6B6B)),
                  ),
                  Text(
                    '• Press "r" in terminal for hot reload',
                    style: TextStyle(fontSize: 14, color: Color(0xFF6B6B6B)),
                  ),
                  Text(
                    '• Change code and see instant update',
                    style: TextStyle(fontSize: 14, color: Color(0xFF6B6B6B)),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildButton({
    required IconData icon,
    required Color color,
    required VoidCallback onPressed,
  }) {
    return GestureDetector(
      onTap: onPressed,
      child: Container(
        width: 64,
        height: 64,
        decoration: BoxDecoration(
          color: color,
          borderRadius: BorderRadius.circular(16),
        ),
        child: Icon(
          icon,
          size: 32,
          color: Colors.black,
        ),
      ),
    );
  }
}
