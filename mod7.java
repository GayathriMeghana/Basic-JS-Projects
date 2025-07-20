import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
public class Division {
    public static void main(String[] args) {
        Frame frame = new Frame("ActionListener Example");
        TextField textField1 = new TextField();
        TextField textField2 = new TextField();
        TextField textField3 = new TextField();
        Button button = new Button("Click Me");
        Label label1 = new Label("Textfield 1:");
        Label label2 = new Label("Textfield 2:");
        Label label3 = new Label("Textfield 3:");
        frame.add(label1);
        frame.add(textField1);
        frame.add(label2);
        frame.add(textField2);
        frame.add(label3);
        frame.add(textField3);
        frame.add(button);
        frame.setLayout(new FlowLayout());

        frame.setSize(300, 300);
        frame.setVisible(true);
        button.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
               try{
                int num1 = Integer.parseInt(textField1.getText());
                int num2= Integer.parseInt(textField2.getText());
                String s;
                s=""+(num1/num2);
textField3.setText(s);
}
catch(ArithmeticException a)
{
JOptionPane.showMessageDialog(null,"Divide by zero");
}
catch(NumberFormatException b)
{
JOptionPane.showMessageDialog(null,"NumberFormatException");
}
            }
        });
    }
}